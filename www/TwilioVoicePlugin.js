var exec = require("cordova/exec")
var delegate = {}

function TwilioVoiceClient() {
    return this;
}

TwilioVoiceClient.call = function(token, params) {
    exec(null, null, "TwilioVoicePlugin", "call", [token, params]);
}

TwilioVoiceClient.sendDigits = function(digits) {
    exec(null, null, "TwilioVoicePlugin", "sendDigits", [digits]);
}

TwilioVoiceClient.disconnect = function() {
    exec(null, null, "TwilioVoicePlugin", "disconnect", null);
}

TwilioVoiceClient.rejectCallInvite = function() {
    exec(null, null, "TwilioVoicePlugin", "rejectCallInvite", null);
}

TwilioVoiceClient.acceptCallInvite = function() {
    exec(null, null, "TwilioVoicePlugin", "acceptCallInvite", null);
}

TwilioVoiceClient.setSpeaker = function(mode) {
    // "on" or "off"
    exec(null, null, "TwilioVoicePlugin", "setSpeaker", [mode]);
}

TwilioVoiceClient.muteCall = function() {
    exec(null, null, "TwilioVoicePlugin", "muteCall", null);
}

TwilioVoiceClient.unmuteCall = function() {
    exec(null, null, "TwilioVoicePlugin", "unmuteCall", null);
}

TwilioVoiceClient.isCallMuted = function(fn) {
    exec(fn, null, "TwilioVoicePlugin", "isCallMuted", null);
}

TwilioVoiceClient.initialize = function(token) {

    var error = function(error) {
        //TODO: Handle errors here
        if(delegate['onerror']) delegate['onerror'](error)
    }

    var success = function(callback) {
        var argument = callback['arguments'];
        if (delegate[callback['callback']]) delegate[callback['callback']](argument);
    }


    exec(success, error, "TwilioVoicePlugin", "initializeWithAccessToken", [token]);
}

TwilioVoiceClient.error = function(fn) {
    delegate['onerror'] = fn;
}

TwilioVoiceClient.clientinitialized = function(fn) {
    delegate['onclientinitialized'] = fn;
}

TwilioVoiceClient.callinvitereceived = function(fn) {
    delegate['oncallinvitereceived'] = fn;
}

TwilioVoiceClient.callinvitecanceled = function(fn) {
    delegate['oncallinvitecanceled'] = fn;
}

TwilioVoiceClient.calldidconnect = function(fn) {
    delegate['oncalldidconnect'] = fn;
}

TwilioVoiceClient.calldiddisconnect = function(fn) {
    delegate['oncalldiddisconnect'] = fn;
}

module.exports = TwilioVoiceClient;
