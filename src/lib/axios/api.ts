// import "dotenv/config"

import axios from "axios";

// import { IInvoicesTopCard } from "@/app/(private)/dashboard/components/TopCards/InvoicesTopCard";
// import { ILeasesTopCard } from "@/app/(private)/dashboard/components/TopCards/LeasesTopCard";
// import { IPropertiesTopCard } from "@/app/(private)/dashboard/components/TopCards/PropertiesTopCard";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_IMOBAPP_SECRET}`,
  },
});

// export interface ITopCards {
//   leases: ILeasesTopCard;
//   invoices: IInvoicesTopCard
//   properties: IPropertiesTopCard
// }

// export interface ICharts {
//   buildings_revenue: {
//     building: string;
//     payment_month: string;
//     total: number;
//   }[]
// }


// export interface IFinances {
//   pending_invoice: any[]
//   invoice_emitted: any[]
// }

export interface ISharedClouseoutPageData{
  invoice_emission_sent: boolean;
  invoice_status: "AUTHORIZED" | "PENDING" | "ERROR" | null;
  invoice_id: string;
  item_id: string;
  owner_document: string;
  owner_name: string;
  share: number;
  property: string;
  value: number;
  description: string;
  behavior: string;
  paid_at: string;
}

export interface IPostInvoice{
  owner_doc: string;
  owner_name: string;
  payments: string[]
  customer: string
  serviceDescription: string
  observations: string
  value: number
  deductions: number
  effectiveDate: string
  municipalServiceId: string
  municipalServiceName: string
  taxes: {
    retainIss: boolean
    iss: number
    cofins: number
    csll: number
    inss: number
    ir: number
    pis: number
  }
}

class ApiClient {
  
  // getTopCards(): Promise<ITopCards>{
  //   return api.get('/dashboard/topcards').then((res) => res.data)
  // }
  
  // getCharts(): Promise<ICharts>{
  //   return api.get('/dashboard/charts').then((res) => res.data) 
  // }
  
  // getTables(): Promise<ITables>{
  //   return api.get('/dashboard/tables').then((res) => res.data)
  // }  

  // getFinances(): Promise<IFinances>{
  //   return api.get('/finances').then((res) => res.data)
  // }  

  getClouseoutItems(): Promise<ISharedClouseoutPageData[]>{
    return api.get('/finances/closeout').then((res) => res.data)
  }  

  postInvoice(data: IPostInvoice): Promise<Partial<IPostInvoice>>{
    console.log(data)
    return api.post('/asaas/invoice', data).then((res) => res.data)
  }
}

export const apiClient = new ApiClient()

