// import "dotenv/config"

import axios from "axios";

import { IMeOwner } from "./interfaces/customers/owners/IMeOwner";

// import { IInvoicesTopCard } from "@/app/(private)/dashboard/components/TopCards/InvoicesTopCard";
// import { ILeasesTopCard } from "@/app/(private)/dashboard/components/TopCards/LeasesTopCard";
// import { IPropertiesTopCard } from "@/app/(private)/dashboard/components/TopCards/PropertiesTopCard";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    "access_token": `${import.meta.env.VITE_IMOBAPP_SECRET}`,
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

export interface IPendingPayments{
  lease_code: string;
  total_pending: number;
  count_pending: number;
  property: string;
  id_owner: string;
  tenant_name: string;
  owner_name: string;
  owner_document: string;
  pending_payments: {
    id: string;
    due_date: Date;
    value: number;
    arrears_days: number;
    bank_slip_url: string;
  }[]
}

export interface IPaidPayments{
  id: string;
  management_fee: number;
  onlending_value: number;
  total_value: number;
  paid_at: Date;
  property: string;
  tenant_name: string;
  items: {
    description: string;
    value: number;
    behavior: string;
    entry: string;
    management_fee: number;
    retained: number;
    discount: number;
    balance: number;
  }[]
}

export interface IUsers {
  id: string;
  role: ["ADMIN" | "USER" | "TENANT" | "OWNER"];
  customer_id: string;
  external_id: string;
  firstname: string;
  lastname: string;
  email: string;
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

  getCustomers(): Promise<any>{
    return api.get('/customers')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
      })
  }

  getUsers(): Promise<IUsers[]>{
    return api.get('/users')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
      })
  }

  getClouseoutItems(): Promise<ISharedClouseoutPageData[]>{
    return api.get('/finances/closeout')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
      })
  }  

  postInvoice(data: IPostInvoice): Promise<Partial<IPostInvoice>>{
    return api.post('/asaas/invoice', data)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
      })
  }

  getMeData(userId: string): Promise<IMeOwner>{
    return api.get("/me", {headers: {user_id: userId}})
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
      })
  }

  getPayments(month: number | string, year: number | string, userId: string): Promise<IPaidPayments[]>{
    return api.get(`/me/paid_payments?month=${month}&year=${year}`, {headers: {user_id: userId}})
      .then((res) => {
        console.log("data", res.data)
        return res.data
      })
      .catch((err) => {
        console.error(err)
      })
  }

}

export const apiClient = new ApiClient()

