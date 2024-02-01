import axios from "axios";
import { number, object } from "zod";

export const asaas = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ASAAS_URL}`,
  timeout: 10000,
  headers: {
    'access_token': `$${process.env.NEXT_PUBLIC_ASAAS_SECRET}`,
    'Access-Control-Allow-Origin': '*',
  },
});


export interface PostScheduleNFSResponseDTO {
    data: {object: string
    id: string
    status: string
    customer: string
    type: string
    statusDescription: string
    serviceDescription: string
    pdfUrl: string
    xmlUrl: string
    rpsNumber: string
    rpsSerie: string
    number: string
    validationCode: string
    value: number
    deductions: number
    effectiveDate: string
    observations: string
    estimatedTaxesDescription: string
    payment: string
    intallment: string
    externalReference: string
    taxes: {
        reatinIss: boolean
        iss: number;
        cofins: number;
        csll: number;
        inss: number;
        ir: number;
        pis: number;
    }
    municipalServiceId: string
    municipalServiceCode: string
    municipalServiceName: string}
}

class AsaasClient {

  postScheduleNFS(data: any): Promise<PostScheduleNFSResponseDTO>{
    return asaas.post('invoices', data).then((res) => res.data.data)
  }
  
  postAuthorizeNFS(nfsId: string): Promise<PostScheduleNFSResponseDTO>{
    return asaas.post(`invoices/${nfsId}/authorize`).then((res) => res.data.data)
  }

  getClientID(cpfCnpj: string): Promise<string>{
    return asaas.get(`customers?cpfCnpj=${cpfCnpj}`).then((res) => res.data.data.id)
  }
  
}

export const asaasClient = new AsaasClient()

