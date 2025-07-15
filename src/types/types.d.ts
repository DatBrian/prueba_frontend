export interface Loan {
    id: number;
    userId: number;
    requestedAmount: number;
    paidValue: number;
    dueDate: string;
    status: string;
    fullyPaid: boolean;
}

export interface Money {
    baseCapital: number;
}

export interface Payment {
    id: number;
    loanId: number;
    userId: number;
    amount: number;
    date: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    idNumber: string;
}