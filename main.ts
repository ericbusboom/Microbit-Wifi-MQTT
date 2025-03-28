input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.publishMqttMessage("\"Button A\"", "mbiot/s", ESP8266_IoT.QosList.Qos0)
})
ESP8266_IoT.MqttEvent("mbiot/r", ESP8266_IoT.QosList.Qos0, function (message) {
    basic.showString("" + (message))
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.publishMqttMessage("\"Button B\"", "mbiot/s", ESP8266_IoT.QosList.Qos0)
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.showIcon(IconNames.Sad)
ESP8266_IoT.connectWifi("Busboom Mesh", "ycagwywbycbi!")
basic.showIcon(IconNames.Confused)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TLS,
"35ee9205f0a449178051933f7215d2b1",
"eric.busboom",
"wDvj6!H4uA%U53o",
""
)
basic.showIcon(IconNames.Surprised)
ESP8266_IoT.connectMQTT("35ee9205f0a449178051933f7215d2b1.s1.eu.hivemq.cloud", 8883, true)
while (ESP8266_IoT.wifiState(false)) {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
