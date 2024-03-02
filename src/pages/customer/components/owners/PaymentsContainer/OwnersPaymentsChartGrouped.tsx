import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';

import { IPaidPayments } from '@/lib/axios/api';
import { priceFormatter } from '@/lib/utils/formatter';
import SelectDate from '@/svg/select-date.svg';


export interface OwnersPaymentsChartGroupedProps {
    payments: IPaidPayments[]
}


export function OwnersPaymentsChartGrouped({payments}: OwnersPaymentsChartGroupedProps) {


    const buildingsList = payments.reduce((acc, payment) => {
        const key = payment.building_name;

        if(!acc.includes(key)){
            acc.push(key)
        }
        return acc
    }, [] as string[])

    const values = buildingsList.map((building) => {
        const value = payments.reduce((acc, payment) => {
            if(payment.building_name === building){
                acc += payment.total_value
            }
            return acc
        }, 0)
        return value
    })

    if(payments.length === 0){
        return <OwnersNotFoundPayments />
    }

  return (
    <div className='w-full flex items-center justify-center'>
        <BarChart
          xAxis={[{ scaleType: 'band', data: buildingsList }]}
          series={[{ data: values },]}
          margin={{left:60 }}
          width={undefined}
          height={300}
        />
    </div>
  );
}


export function OwnersNotFoundPayments(){
    return (
        <div className="h-full flex flex-col items-center justify-center mt-10" >
            <h1 className="text-semibold text-zinc-500">Não há nada por aqui. Selecione outro período.</h1>
            <img src={SelectDate} width={100} height={100} className="mt-5" />
        </div>    
    )
}

