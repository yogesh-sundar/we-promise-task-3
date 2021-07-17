async function coronaDetails() {
    try {
        let resp = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
        let result = await resp.json()

        document.getElementById("andamanConfirmed").innerHTML = result.India['Andaman and Nicobar Islands'].confirmed;
        document.getElementById("andamanRecovered").innerHTML = result.India['Andaman and Nicobar Islands'].recovered;
        document.getElementById("andamanDeaths").innerHTML = result.India['Andaman and Nicobar Islands'].deaths;

        document.getElementById("andhraConfirmed").innerHTML = result.India['Andhra Pradesh'].confirmed;
        document.getElementById("andhraRecovered").innerHTML = result.India['Andhra Pradesh'].recovered;
        document.getElementById("andhraDeaths").innerHTML = result.India['Andhra Pradesh'].deaths;

        document.getElementById("arunachalConfirmed").innerHTML = result.India['Arunachal Pradesh'].confirmed;
        document.getElementById("arunachalRecovered").innerHTML = result.India['Arunachal Pradesh'].recovered;
        document.getElementById("arunachalDeaths").innerHTML = result.India['Arunachal Pradesh'].deaths;

        document.getElementById("assamConfirmed").innerHTML = result.India.Assam.confirmed;
        document.getElementById("assamRecovered").innerHTML = result.India.Assam.recovered;
        document.getElementById("assamDeaths").innerHTML = result.India.Assam.deaths;

        document.getElementById("biharConfirmed").innerHTML = result.India.Bihar.confirmed;
        document.getElementById("biharRecovered").innerHTML = result.India.Bihar.recovered;
        document.getElementById("biharDeaths").innerHTML = result.India.Bihar.deaths;

        document.getElementById("chandigarhConfirmed").innerHTML = result.India.Chandigarh.confirmed;
        document.getElementById("chandigarhRecovered").innerHTML = result.India.Chandigarh.recovered;
        document.getElementById("chandigarhDeaths").innerHTML = result.India.Chandigarh.deaths;

        document.getElementById("chhattisgarhConfirmed").innerHTML = result.India.Chhattisgarh.confirmed;
        document.getElementById("chhattisgarhRecovered").innerHTML = result.India.Chhattisgarh.recovered;
        document.getElementById("chhattisgarhDeaths").innerHTML = result.India.Chhattisgarh.deaths;

        document.getElementById("dadraConfirmed").innerHTML = result.India['Dadra and Nagar Haveli and Daman and Diu'].confirmed;
        document.getElementById("dadraRecovered").innerHTML = result.India['Dadra and Nagar Haveli and Daman and Diu'].recovered;
        document.getElementById("dadraDeaths").innerHTML = result.India['Dadra and Nagar Haveli and Daman and Diu'].deaths;

        document.getElementById("delhiConfirmed").innerHTML = result.India.Delhi.confirmed;
        document.getElementById("delhiRecovered").innerHTML = result.India.Delhi.recovered;
        document.getElementById("delhiDeaths").innerHTML = result.India.Delhi.deaths;

        document.getElementById("goaConfirmed").innerHTML = result.India.Goa.confirmed;
        document.getElementById("goaRecovered").innerHTML = result.India.Goa.recovered;
        document.getElementById("goaDeaths").innerHTML = result.India.Goa.deaths;

        document.getElementById("gujaratConfirmed").innerHTML = result.India.Gujarat.confirmed;
        document.getElementById("gujaratRecovered").innerHTML = result.India.Gujarat.recovered;
        document.getElementById("gujaratDeaths").innerHTML = result.India.Gujarat.deaths;

        document.getElementById("haryanaConfirmed").innerHTML = result.India.Haryana.confirmed;
        document.getElementById("haryanaRecovered").innerHTML = result.India.Haryana.recovered;
        document.getElementById("haryanaDeaths").innerHTML = result.India.Haryana.deaths;

        document.getElementById("himachalConfirmed").innerHTML = result.India['Himachal Pradesh'].confirmed;
        document.getElementById("himachalRecovered").innerHTML = result.India['Himachal Pradesh'].recovered;
        document.getElementById("himachalDeaths").innerHTML = result.India['Himachal Pradesh'].deaths;

        document.getElementById("jammuConfirmed").innerHTML = result.India['Jammu and Kashmir'].confirmed;
        document.getElementById("jammuRecovered").innerHTML = result.India['Jammu and Kashmir'].recovered;
        document.getElementById("jammuDeaths").innerHTML = result.India['Jammu and Kashmir'].deaths;

        document.getElementById("jharkhandConfirmed").innerHTML = result.India.Jharkhand.confirmed;
        document.getElementById("jharkhandRecovered").innerHTML = result.India.Jharkhand.recovered;
        document.getElementById("jharkhandDeaths").innerHTML = result.India.Jharkhand.deaths;

        document.getElementById("karnatakaConfirmed").innerHTML = result.India.Karnataka.confirmed;
        document.getElementById("karnatakaRecovered").innerHTML = result.India.Karnataka.recovered;
        document.getElementById("karnatakaDeaths").innerHTML = result.India.Karnataka.deaths;

        document.getElementById("keralaConfirmed").innerHTML = result.India.Kerala.confirmed;
        document.getElementById("keralaRecovered").innerHTML = result.India.Kerala.recovered;
        document.getElementById("keralaDeaths").innerHTML = result.India.Kerala.deaths;

        document.getElementById("ladakhConfirmed").innerHTML = result.India.Ladakh.confirmed;
        document.getElementById("ladakhRecovered").innerHTML = result.India.Ladakh.recovered;
        document.getElementById("ladakhDeaths").innerHTML = result.India.Ladakh.deaths;

        document.getElementById("lakshadweepConfirmed").innerHTML = result.India.Lakshadweep.confirmed;
        document.getElementById("lakshadweepRecovered").innerHTML = result.India.Lakshadweep.recovered;
        document.getElementById("lakshadweepDeaths").innerHTML = result.India.Lakshadweep.deaths;

        document.getElementById("madhyaConfirmed").innerHTML = result.India['Madhya Pradesh'].confirmed;
        document.getElementById("madhyaRecovered").innerHTML = result.India['Madhya Pradesh'].recovered;
        document.getElementById("madhyaDeaths").innerHTML = result.India['Madhya Pradesh'].deaths;

        document.getElementById("maharashtraConfirmed").innerHTML = result.India.Maharashtra.confirmed;
        document.getElementById("maharashtraRecovered").innerHTML = result.India.Maharashtra.recovered;
        document.getElementById("maharashtraDeaths").innerHTML = result.India.Maharashtra.deaths;

        document.getElementById("manipurConfirmed").innerHTML = result.India.Manipur.confirmed;
        document.getElementById("manipurRecovered").innerHTML = result.India.Manipur.recovered;
        document.getElementById("manipurDeaths").innerHTML = result.India.Manipur.deaths;

        document.getElementById("meghalayaConfirmed").innerHTML = result.India.Meghalaya.confirmed;
        document.getElementById("meghalayaRecovered").innerHTML = result.India.Meghalaya.recovered;
        document.getElementById("meghalayaDeaths").innerHTML = result.India.Meghalaya.deaths;

        document.getElementById("mizoramConfirmed").innerHTML = result.India.Mizoram.confirmed;
        document.getElementById("mizoramRecovered").innerHTML = result.India.Mizoram.recovered;
        document.getElementById("mizoramDeaths").innerHTML = result.India.Mizoram.deaths;

        document.getElementById("nagalandConfirmed").innerHTML = result.India.Nagaland.confirmed;
        document.getElementById("nagalandRecovered").innerHTML = result.India.Nagaland.recovered;
        document.getElementById("nagalandDeaths").innerHTML = result.India.Nagaland.deaths;

        document.getElementById("odishaConfirmed").innerHTML = result.India.Odisha.confirmed;
        document.getElementById("odishaRecovered").innerHTML = result.India.Odisha.recovered;
        document.getElementById("odishaDeaths").innerHTML = result.India.Odisha.deaths;

        document.getElementById("puducherryConfirmed").innerHTML = result.India.Puducherry.confirmed;
        document.getElementById("puducherryRecovered").innerHTML = result.India.Puducherry.recovered;
        document.getElementById("puducherryDeaths").innerHTML = result.India.Puducherry.deaths;

        document.getElementById("punjabConfirmed").innerHTML = result.India.Punjab.confirmed;
        document.getElementById("punjabRecovered").innerHTML = result.India.Punjab.recovered;
        document.getElementById("punjabDeaths").innerHTML = result.India.Punjab.deaths;

        document.getElementById("rajasthanConfirmed").innerHTML = result.India.Rajasthan.confirmed;
        document.getElementById("rajasthanRecovered").innerHTML = result.India.Rajasthan.recovered;
        document.getElementById("rajasthanDeaths").innerHTML = result.India.Rajasthan.deaths;

        document.getElementById("sikkimConfirmed").innerHTML = result.India.Sikkim.confirmed;
        document.getElementById("sikkimRecovered").innerHTML = result.India.Sikkim.recovered;
        document.getElementById("sikkimDeaths").innerHTML = result.India.Sikkim.deaths;

        document.getElementById("tamilnaduConfirmed").innerHTML = result.India['Tamil Nadu'].confirmed;
        document.getElementById("tamilnaduRecovered").innerHTML = result.India['Tamil Nadu'].recovered;
        document.getElementById("tamilnaduDeaths").innerHTML = result.India['Tamil Nadu'].deaths;

        document.getElementById("telanganaConfirmed").innerHTML = result.India.Telangana.confirmed;
        document.getElementById("telanganaRecovered").innerHTML = result.India.Telangana.recovered;
        document.getElementById("telanganaDeaths").innerHTML = result.India.Telangana.deaths;

        document.getElementById("tripuraConfirmed").innerHTML = result.India.Tripura.confirmed;
        document.getElementById("tripuraRecovered").innerHTML = result.India.Tripura.recovered;
        document.getElementById("tripuraDeaths").innerHTML = result.India.Tripura.deaths;

        document.getElementById("uttarpradeshConfirmed").innerHTML = result.India['Uttar Pradesh'].confirmed;
        document.getElementById("uttarpradeshRecovered").innerHTML = result.India['Uttar Pradesh'].recovered;
        document.getElementById("uttarpradeshDeaths").innerHTML = result.India['Uttar Pradesh'].deaths;

        document.getElementById("uttarakhandConfirmed").innerHTML = result.India.Uttarakhand.confirmed;
        document.getElementById("uttarakhandRecovered").innerHTML = result.India.Uttarakhand.recovered;
        document.getElementById("uttarakhandDeaths").innerHTML = result.India.Uttarakhand.deaths;

        document.getElementById("westbengalConfirmed").innerHTML = result.India['West Bengal'].confirmed;
        document.getElementById("westbengalRecovered").innerHTML = result.India['West Bengal'].recovered;
        document.getElementById("westbengalDeaths").innerHTML = result.India['West Bengal'].deaths;

        document.getElementById("totalConfirmed").innerHTML = result.India.All.confirmed;
        document.getElementById("totalRecovered").innerHTML = result.India.All.recovered;
        document.getElementById("totalDeaths").innerHTML = result.India.All.deaths;
    }
    catch (error) {
        console.log(error);
    }
}

coronaDetails();