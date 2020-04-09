
// Definition des variables

const http = require('http');
var express = require('express');
var app = express();
var request = require('request');
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');

// const accountSid = 'ACe8b68f523b71b80f99555e4286bf6c7c';

// const authToken = '5307cbc91c0b0719a0ccb06c99a7175f';
// ACb772907ca2921bcbf58dfed04c2329b9
// 8796338ece6f0710518b6c55ae84a80e

const accountSid = 'AC55dafddd9d91710b8e9bc1fc91c78d65';

const authToken = '687e9ec1f0428168428eb1aa5ec3a904';


const client = require('twilio')(accountSid,authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var os = require('os');
if (os.platform() == 'win32') {  
    if (os.arch() == 'ia32') {
        var chilkat = require('@chilkat/ck-node11-win-ia32');
    } else {
        var chilkat = require('@chilkat/ck-node12-win64'); 
    }
} else if (os.platform() == 'linux') {
    if (os.arch() == 'arm') {
        var chilkat = require('@chilkat/ck-node11-arm');
    } else if (os.arch() == 'x86') {
        var chilkat = require('@chilkat/ck-node11-linux32');
    } else {
        var chilkat = require('@chilkat/ck-node10-linux64');
    }
} else if (os.platform() == 'darwin') {
    var chilkat = require('@chilkat/ck-node11-macosx');
}

// http://164.68.108.161:8080/incoming

app.post('/incoming', asyncHandler(async(req,res) =>{
  
   try{

    console.log(req.body);
  
    if(req.body.Body!=1){
        const twiml = new MessagingResponse();

            //const API_ENDPOINT = 'https://ibusinesscompanies.com:8443/mobile-ws';
            var base = 'http://ibusinesscompanies.com:18080/mobile-ws/product/whatsap/produit?type=A LA UNE';
            var query = req.body.Body;
            
            
            request(base, async function (error, response, body) {
                body = await JSON.parse(JSON.stringify(body));
                // console.log(body);
                var jsonArray = await new chilkat.JsonArray();
                jsonArray.Load(body);
                var jsonObject = await new chilkat.JsonObject();
                jsonObject.Load(body); 
                i = 0;
                j = 0;
                var numPets = await jsonObject.SizeOfArray("product_list");
                var numPetAs = await jsonObject.SizeOfArray("product_list.media");
                console.log(numPets);
                while (i < numPets) {
                    jsonObject.I = await i;
                    jsonObject.I = await j;
                    console.log(i + ": " + jsonObject.StringOf("product_list[i].name")); 
                    var msg =  twiml.message(jsonObject.StringOf("product_list[i].name")+"\n")
                    msg.media(jsonObject.StringOf("product_list[i].media[j].url"));
                    i = i+1;
                    j = j+1;
                }
                var msge =  twiml.message(jsonObject.StringOf("product_list[3].name")+"\n")
                msge.media(jsonObject.StringOf("product_list[3].media[3].url"));
                if(j=6){
                twiml.message("Vous pouvez nous contacter au .\n 338273737 ou nous retrouver \n https://www.google.com/maps/place/Innov4africa/@14.7218749,-17.4634412,2728m/data=!3m1!1e3!4m5!3m4!1s0xec1730591a88de7:0x9a4d6bfb2eb7a58c!8m2!3d14.7166336!4d-17.4696404%22")
                twiml.message("Merci de nous contacter sur whatsapp au 777672020 pour plus d'infos"); 
                }
                //https://server.ibusinesscompanies.com/i-images/Set_de_Th%C3%A9_8_Pi%C3%A8ces_/_1_Carafe_+_1_Plat_+_6_Tasses_/_Porcelaine_Blanc14242_800014241585847650502.jpg
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
            });
               
                    
            }

    else{
        const twiml = new MessagingResponse();

            //const API_ENDPOINT = 'https://ibusinesscompanies.com:8443/mobile-ws';
            var base = 'http://ibusinesscompanies.com:18080/mobile-ws/product/whatsap/produit?type=A LA UNE';
            var query = req.body.Body;
            
            
            request(base, async function (error, response, body) {
                body = await JSON.parse(JSON.stringify(body));
                // console.log(body);
                var jsonArray = await new chilkat.JsonArray();
                jsonArray.Load(body);
                var jsonObject = await new chilkat.JsonObject();
                jsonObject.Load(body); 
                i = 0;
                j = 0;
                var numPets = await jsonObject.SizeOfArray("product_list");
                var numPetAs = await jsonObject.SizeOfArray("product_list.media");
                console.log(numPets);
                while (i < numPets) {
                    jsonObject.I = await i;
                    jsonObject.I = await j;
                    console.log(i + ": " + jsonObject.StringOf("product_list[i].name")); 
                    var msg =  twiml.message(jsonObject.StringOf("product_list[i].name")+"\n")
                    msg.media(jsonObject.StringOf("product_list[i].media[j].url"));
                    i = i+1;
                    j = j+1;
                }
                var msge =  twiml.message(jsonObject.StringOf("product_list[3].name")+"\n")
                msge.media(jsonObject.StringOf("product_list[3].media[3].url"));
                if(j=6){
                twiml.message("Vous pouvez nous contacter au .\n 338273737 ou nous retrouver \n https://www.google.com/maps/place/Innov4africa/@14.7218749,-17.4634412,2728m/data=!3m1!1e3!4m5!3m4!1s0xec1730591a88de7:0x9a4d6bfb2eb7a58c!8m2!3d14.7166336!4d-17.4696404%22")
                twiml.message("Merci de nous contacter sur whatsapp au 777672020 pour plus d'infos"); 
                }
                //https://server.ibusinesscompanies.com/i-images/Set_de_Th%C3%A9_8_Pi%C3%A8ces_/_1_Carafe_+_1_Plat_+_6_Tasses_/_Porcelaine_Blanc14242_800014241585847650502.jpg
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
            });
               
                    
            
    }
} catch (error) {
    console.log(error);
  }

}));


http.createServer(app).listen(3000, () => {
    console.log('Express server listening on port 3000');
});