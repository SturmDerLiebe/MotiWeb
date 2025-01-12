# TODOs

- Add following code to root layout to read SessionId Cookie on incoming requests:

    ```ts
    SessionRepositoryInstance.saveSessionId(
        (await cookies()).get(
            `${process.env.NODE_ENV === "production" ? "__HOST-" : ""}SESSION-ID`,
        )?.value ?? "",
    );
    ```

- Add following code authentication layout to set SessionId Cookie on outgoing responses:

    ```ts
    //TODO: after authentication
    (await cookies()).set(
        `${process.env.NODE_ENV === "production" ? "__HOST-" : ""}SESSION-ID`,
        await SessionRepositoryInstance.readSessionId(),
        {
            //TODO: Add secure flag and path / on prod
        },
    );
    ```

    - read session id from session repository

    - extend session id cookies max age by 1 week in middleware

    - Make InputComponent a wrapper that takes in the base input component
