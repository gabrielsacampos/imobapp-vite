export interface ITopCards{
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
    }[];
    properties: {
        id: string;
        db_id: number;
        unity: string;
        block: string;
        type: string;
        active: boolean;
        status: string;
        id_building: string;
        building_name: string;
        area: number;
        bedroom: number;
        suite: number;
        garage: number;
        rental_value: number;
        sale_value: number;
        alternative_code: string;
        created_at: string;
        updated_at: string;
        owner_type: string;
        owner_name: string;
        owner_document: string;
        id_property: string;
        id_owner: string;
        share: number;
        property: string;
    }[];
}

