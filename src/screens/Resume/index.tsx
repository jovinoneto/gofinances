import React, { useCallback, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from "@react-navigation/native";
import { addMonths, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { VictoryPie } from "victory-native";

import { useAuth } from "../../hooks/auth";
import { HistoryCard } from "../../components/Form/HistoryCard";
import { categories } from "../../utils/categories";
import theme from "../../global/styles/theme";
import {
  Container,
  Header,
  Title,
  ContentScrollView,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
  LoadIndicator,
} from "./styles";

export interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  date: string;
  category: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [isLoading, setIsloading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalBycategories, setTotalByCategories] = useState<CategoryData[]>([]);

  const { user } = useAuth();

  function handleDateChange(action: 'next' | 'prev') {
    if(action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }
  
  async function loadData() {
    setIsloading(true);
    
    const dataKey = `@gofinances:transactions_user:${user.id}`;

    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];
    
    const expensives = responseFormatted
    .filter((expensive: TransactionData) => expensive.type === 'negative' &&
      new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
      new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensivesTotal = expensives.reduce((acumullator: number, expensive: TransactionData) => {
      return acumullator + Number(expensive.amount);
    }, 0);

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if(expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if(categorySum > 0) {
        const totalFormatted = categorySum
          .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent
        })
      }
    });
    
    setTotalByCategories(totalByCategory);
    setIsloading(false);
  }

  useFocusEffect(useCallback(() => {
    loadData();
  },[selectedDate]));

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      {
        isLoading 
        ?
          <LoadContainer>
            <LoadIndicator />
          </LoadContainer> 
        :
        <>

          <MonthSelect>
            <MonthSelectButton onPress={() => handleDateChange('prev')}>
              <MonthSelectIcon name="chevron-left"/>
            </MonthSelectButton>

              <Month>
                {format(selectedDate, 'MMMM, yyyy', {locale: ptBR})}
              </Month>

            <MonthSelectButton onPress={() => handleDateChange('next')}>
              <MonthSelectIcon name="chevron-right"/>
            </MonthSelectButton>
          </MonthSelect>
        
          <ContentScrollView>

            <ChartContainer>
              <VictoryPie
                data={totalBycategories}
                x="percent"
                y="total"
                style={{
                  labels: {
                    fontWeight: 'bold',
                    fill: theme.colors.shape,
                    fontSize: RFValue(15),
                  }
                }}
                labelRadius={120}
                padding={{left: 30, right: 30}}
                colorScale={totalBycategories.map(category => category.color)}
              />
            </ChartContainer>
            {
              totalBycategories.map(item => (
                <HistoryCard
                  key={item.key}
                  title={item.name}
                  amount={item.totalFormatted}
                  color={item.color}
                />
              ))
            }

          </ContentScrollView>
          
        </>
      }
    </Container>
  )
}