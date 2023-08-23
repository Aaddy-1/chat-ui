# Firebase Chat-App
This is a chat app that I made with react using components from **Material UI** with most of the backend processes like user registration and **OAuth functionality** being handled with **Firebase**.

## How It Works
1. The login screen allows users to sign in using their email address and password, or login using **OAuth** functionality using their google account.
2. In case users do not have an account, they have the option to create an account on a sign up page where they can provide their email and set their password, which must follow conventional password rules which are validated using a **regex**. Upon registration, their details are stored inside **cloud firestore**.
3. Finally, the chat screen allows users to talk to other people signed up on the app.

Presently, the chat functionality still does not work as I have yet to implement the web socket logic, however, the screens have been made and only require the backend logic to be written.

Here are some screenshots of the app:

<img width="1440" alt="Screenshot 2023-08-22 at 6 39 01 PM" src="https://github.com/Aaddy-1/chat-ui/assets/83650351/dfcdac78-82b4-43a4-9300-0ae9578b984c">
The sign in page

<img width="1440" alt="Screenshot 2023-08-22 at 6 31 17 PM" src="https://github.com/Aaddy-1/chat-ui/assets/83650351/21290a5e-16c4-4a8d-aabd-f79b7f77bee3">
The sign up page

<img width="1440" alt="Screenshot 2023-08-22 at 6 31 35 PM" src="https://github.com/Aaddy-1/chat-ui/assets/83650351/799de49d-bf36-44ca-94da-e39573f05674">
Login using google account

<img width="1440" alt="Screenshot 2023-08-22 at 6 40 33 PM" src="https://github.com/Aaddy-1/chat-ui/assets/83650351/0b9efaf5-0390-45ef-b655-953a6ea9759e">
The chat window

## Future Updates
1. Implementing the backend logic to enable actual communication between registered users.
2. Deploying the project live on GithubPages.



