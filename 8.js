// Медіатор (Mediator) — це патерн програмування, який визначає об'єкт, який інкапсулює взаємодію між групою об'єктів. Медіатор сприяє слабкій залежності між цими об'єктами,
// дозволяючи спілкуватися з ними через централізовану точку.

// Клас User відповідає за користувача, який може відправляти повідомлення.
class User {constructor(name, messenger){this.name=name; this.messenger=messenger;} 
sendMessage(message) {console.log(`${this.name} відправив повідомлення ${message}`); return this.messenger.sendMessage(message);}
receiveMessage(user, message) {console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);}
  // Створюємо конструктор класу, який приймає name та messenger як параметри та ініціалізує їх
  // Робимо метод sendMessage який відправляє повідомлення за допомогою відповідного месенджера, та виводить в консоль `${this.name} відправив повідомлення ${message}`.
  // Він приймає один параметр - message - повідомлення, яке потрібно відправити за допомогою методу sendMessage.
  // Метод receiveMessage приймає аргументи user,message та виводить в консоль ${this.name} отримав повідомлення від ${user.name}: ${message}
}

// Клас SMSMessenger відповідає за відправку повідомлень за допомогою SMS.
class SMSMessenger {static sendMessage(message) { console.log(`Відправлено SMS: ${message}`);}
  // Створюємо статичний метод sendMessage який приймає один параметр - message, та виводить в консоль `Відправлено SMS: ${message}`
}

// Клас EmailMessenger відповідає за відправку повідомлень за допомогою Email.
class EmailMessenger {static sendMessage(message) {console.log(`Відправлено Email: ${message}`);}
  // Створюємо статичний метод sendMessage який приймає один параметр - message, та виводить в консоль `Відправлено Email: ${message}`
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - John та Jane - які відправляють повідомлення за допомогою різних месенджерів.
const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

// John відправляє повідомлення за допомогою SMS.
john.sendMessage("Привіт!"); // Виведе: Відправлено SMS: [John]: Привіт!

// Jane відправляє повідомлення за допомогою Email.
jane.sendMessage("Привіт!"); // Виведе: Відправлено Email: [Jane]: Привіт!
