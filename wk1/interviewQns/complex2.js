cy.request({
    "BODY": {

    },
    "URL": "",
    "METHOD": "GET",
}).then((response) => {
    expect(response.status).to.equal(200);
    const token = response.body.token;
    Window.localStorage.setItem("token", token)
    cy.wrap(token).as("Token");
})

cy.get("@Token").then((token) => {
    cy.request({
        "BODY": {

    },
    URL: "",
    METHOD: "GET",
    headers : {
        authorization : `Bearer ${token}`
    }
    }).then((response) => {
        expect(response.status).to.eq(200);
        const sessionId = response.body.sessionId;
        window.localStorage.setItem("Session", sessionId);
    })
})
