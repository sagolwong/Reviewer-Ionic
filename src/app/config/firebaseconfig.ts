export const FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "reviewer-8545b",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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