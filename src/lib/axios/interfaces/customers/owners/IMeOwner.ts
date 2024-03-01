export interface IMeOwner{
    leases: {
        id: string;
        code: string;
        status: string;
        start_at: string;
        duration: number;
        end_at: string;
        property: string;
        tenant_name: string;
        lease_value: number;
        days_to_expire: number;
        readjustment_month: number;
        need_readjustment: null | {
            new_value: number;
            readjustment_percent: number;
            history: {
                current_new_value: number;
                percentage: string;
                date: string;
            }[]
        };
    }[];
    buildings_and_properties: {
        name: string
        address: string;
        count_properties: number;
        count_rented: number
        count_available: number
        total_rental_value: number;
        properties: {
            id: string
            block: string
            unity: string;
            room: number
            garage: number
            area: number
            suite: number
            rental_value: number
            rented_value: number
            status: string
        }[]
    }[];
    properties_with_pendings: {
        id: string
        lease_code: string
        total_rental_value: number;
        total_pending: number
        count_pending: number
        property: string
        id_owner: string
        owner_name: string
        owner_document: string
        tenant_name: string
        pending_payments: {
            id: string
            due_date: string
            value: number
            pending_days: number
            bank_slip_url?: string
        }[]
    }[]
}

