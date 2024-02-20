// query - select distinct effective_date from invoices where owner = me

// id String @id @unique()
// db_id                         Int
// database                      Database       @relation("invoicesToDatabase", fields: [db_id], references: [id])
// status String
// customer_asaas String
// status_description String?
// pdf_url String
// xml_url String
// number String?
// value Float?
// effective_date DateTime?
// payments Payment[] @relation("invoiceToPayment")

export const mock = [
    {
        effective_date: "2023-01-01",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "12",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 1000,
        paid_at: "2023-01-01",
    },
    {
        effective_date: "2023-01-01",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "43",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 4000,
        paid_at: "2023-01-01",
    },
    {
        effective_date: "2023-01-01",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "10",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 5000,
        paid_at: "2023-01-01",
    },
    {
        effective_date: "2023-01-01",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "12",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 1000,
        paid_at: "2023-01-01",
    },
    {
        effective_date: "2023-01-03",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "43",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 4000,
        paid_at: "2023-01-01",
    },
    {
        effective_date: "2023-01-03",
        pdf_url : "www.pdfurl.com",
        xml_ur: "www.xlrUrl.com",
        number: "10",
        property: "Eko Home Club",
        description: "Aluguel",
        behavior: "charge_tenand",
        value: 5000,
        paid_at: "2023-01-01",
    }
]