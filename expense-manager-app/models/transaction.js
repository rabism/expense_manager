class Transaction {
  constructor(
    transactionId,
    transactionType,
    categoryId,
    categoryIcon,
    categoryName,
    categoryIconType,
    transactionDate,
    description,
    transactionDay,
    transactionWeek,
    transactionMonth,
    transactionQuater,
    transactionYear,
    transactionFiscalYear,
    transactionDayOfWeek,
    amountCredit,
    amountDebit
  ) {
    this.transactionId = transactionId;
    this.transactionType = transactionType;
    this.categoryId = categoryId;
    this.categoryIcon = categoryIcon;
    this.categoryName = categoryName;
    this.categoryIconType = categoryIconType;
    this.transactionDate = transactionDate;
    this.description = description;
    this.transactionDay = transactionDay;
    this.transactionWeek = transactionWeek;
    this.transactionMonth = transactionMonth;
    this.transactionQuater = transactionQuater;
    this.transactionYear = transactionYear;
    this.transactionFiscalYear = transactionFiscalYear;
    this.transactionDayOfWeek = transactionDayOfWeek;
    this.amountCredit = amountCredit;
    this.amountDebit = amountDebit;
  }
}

export default Transaction;
