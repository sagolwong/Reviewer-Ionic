export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBuOX38DyDIIvyK_-l9XyyRjKhYq_fIHwY",
    authDomain: "reviewer-8545b.firebaseapp.com",
    databaseURL: "https://reviewer-8545b.firebaseio.com",
    projectId: "reviewer-8545b",
    storageBucket: "reviewer-8545b.appspot.com",
    messagingSenderId: "281707185188",
    appId: "1:281707185188:web:961e4c20dca00f464ec4b1",
    measurementId: "G-VNFD7R6BKL"
};

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};