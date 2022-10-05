import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
