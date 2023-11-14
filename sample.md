# Sample

We need to add this in AndroidManifest.xml.
```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

## Ionic + React

```js
const Twilio = (window as any).TwilioPlugin?.TwilioVoiceClient;

const token = 'dummy_token';

function prepare(token) {
    // TODO: checkPermission(), requestPermission() by another way

    Twilio.clientinitialized(() => {
    });
    Twilio.calldidconnect((call) => {
      console.log(call);
    });
    Twilio.calldiddisconnect((call) => {
      console.log(call);
    });
    Twilio.error((error) => {
      console.log(error);
    });

    Twilio.initialize(token);
}

function call() {
    const params = {};
    Twilio.call(token, params);
}

function disconnect() {
    Twilio.disconnect();
}
```