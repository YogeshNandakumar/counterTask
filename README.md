# counterTask

					counter task

technologies used : react js

The purpose of counter task is incrementing or decrementing the given number which is entered by user.it consists of 3 components. they are 1)input component 2)sidebar component 3)counter component.

1)input component : in this user can enter the number as input. whenever the value changes the latest value will update in state. when user click on submit button the entered value will go to counter component using component interaction.

2)sidebar component : in this user can select the type of arithmetic operation(increment/decrement). based on the selection, the button value of counter component changes to increment/decrement. in this user can also give the value to perform certain arithmetic operation.
user selected values will update to the state and wil be passed to the counter component using child to parent component interaction.

3)counter component: in this user can allow to click the button which is seleted by user before. when user clicks on that button, the related arithmetic operation will occur and result will shown in disabled input field.


ex: 
1)suppose in input component i will give the value 5 and submit.
2)the value 5 will be displayed in disabled input field of counter component.
3)After that i will select the increment button and will give value 2 in sidebar component.
4)in counter component the button value changed to increment because i have selected increment in sidebar component.
5)Now, if i click on the increment button in counter component, the value 7 will display in disabled input field.


