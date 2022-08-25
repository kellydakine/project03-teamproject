function saveBasicStorage(data){
    window.localStorage.setItem('basic', JSON.stringify(data));
}
function getBasicStorage(){
    return JSON.parse(window.localStorage.getItem('basic'));
}
function saveSocialStorage(data){
    window.localStorage.setItem('social', JSON.stringify(data));
}
function getSocialStorage(){
    return JSON.parse(window.localStorage.getItem('social'));
}
function saveCertificatesStorage(data){
    window.localStorage.setItem('certificates', JSON.stringify(data));
}
function getCertificatesStorage(){
    return JSON.parse(window.localStorage.getItem('certificates'));
}

