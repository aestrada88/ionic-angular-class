const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total');

let total = 0;

  function presentAlertConfirm() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Something Went Wrong!';
  alert.message = 'One or more of your inputs is incorrect/missing';
  alert.buttons = [
    {
      text: 'Okay',
      handler: () => {
        console.log('Confirm Okay')
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
}

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if(enteredReason.trim().length <= 0 || 
  enteredAmount <= 0 || 
  isNaN(enteredAmount) != false ||
  enteredAmount.trim().length <= 0){
    console.log('It is Wrong');

    presentAlertConfirm();

    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;

  expensesList.appendChild(newItem);

  total += +enteredAmount;
  totalExpenses.textContent = total;

  clear();

});

//CAN BE DONE LIKE THIS, BUT EASIER THE OTHER WAY UNDER
// cancelBtn.addEventListener('click', () => {
//   clear();
// });

cancelBtn.addEventListener('click', clear);