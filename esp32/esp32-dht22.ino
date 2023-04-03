/**
   ESP32 + DHT22 Example for Wokwi
   
   https://wokwi.com/arduino/projects/322410731508073042
*/

#include <WiFi.h>
#include "DHTesp.h"
#include "ThingSpeak.h"

//Pino onde o DHT22 está conectado
const int DHT_PIN = 15;

//Canal e APIKey do ThingSpeak
unsigned long myChannelNumber = 1;
const char * myWriteAPIKey = "WF3LOXFBTAY8652R";

WiFiClient  client;

DHTesp dhtSensor;

void setup() {
  Serial.begin(115200);
  dhtSensor.setup(DHT_PIN, DHTesp::DHT22);

  //Inicializa conexão WiFi
  Serial.print("Conectando-se ao Wi-Fi");
  WiFi.begin("Wokwi-GUEST", "", 6);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println(" Conectado!"); 

  ThingSpeak.begin(client);
}

void loop() {
  //Obtém temperatura e humidade
  TempAndHumidity  data = dhtSensor.getTempAndHumidity();
  Serial.println("Temp: " + String(data.temperature, 2) + "°C");
  Serial.println("Humidity: " + String(data.humidity, 1) + "%");
  Serial.println("---");

  //Envia dados ao ThingSpeak 
  ThingSpeak.setField(1, data.temperature);
  ThingSpeak.setField(2, data.humidity);
  int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);

  if(x == 200){
    Serial.println("Channel update successful.");
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }

  delay(10000);
}