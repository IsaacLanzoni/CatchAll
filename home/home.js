function logout() {
    
    firebase.auth().signOut().then(() => {
        window.location.href = "../login/index.html";
    }).catch(() => {
        alert("Erro na tentativa de sair.");
    })
}

function showSidebar(){
    const sidebar = window.document.querySelector('.sidebar');

    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = window.document.querySelector('.sidebar');

    sidebar.style.display = 'none';
}

uploadButton.addEventListener('click', () => {
    form.fileSave().click();

    const importSaveButton = window.document.querySelector('.import-save-button');
    importSaveButton.style.display = 'none';

    setTimeout(() => {
        processFile();
    }, 10000);
    
});


const form = {
    uploadButton: () => window.document.getElementById('uploadButton'),
    fileInput: () => window.document.getElementById('fileInput'),
    filePath: () => window.document.getElementById('filePath'),
    fileSave: () => window.document.getElementById('file-save')
}