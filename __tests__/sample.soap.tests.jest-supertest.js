jest.setTimeout(30000);

var parser = require('xml2json');

const request = require('supertest')('https://www.w3schools.com/xml/tempconvert.asmx?op=FahrenheitToCelsius');

describe(`SOAP API Tests with Supertest`, () => {
  test('SOAP Simple test', async () => {

    const itemXML = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
          <Fahrenheit>100.4</Fahrenheit>
        </FahrenheitToCelsius>
      </soap:Body>
    </soap:Envelope>`;

    const response = await request.post('/')
    .set('Content-Type', 'text/xml')
    .send(itemXML);

    const responseJson = JSON.parse(parser.toJson(response.text));

    const convertedTemp = responseJson['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult'];

    expect(response.status).toBe(200);

    expect(convertedTemp).toBe('38');
  });
})