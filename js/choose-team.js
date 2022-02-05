document.getElementById('get-teampasscode-btn').onclick = () => {
    document.getElementById('modal-body-join').innerHTML = `You are about to <strong>join</strong> team with passcode <strong>${document.getElementById('team-code').value}</strong>. Are you sure?`;
}
document.getElementById('get-teamname-btn').onclick = () => {
    document.getElementById('modal-body-create').innerHTML = `You are about to <strong>create</strong> team with name <strong>${document.getElementById('team-name').value}</strong>. Are you sure?`;
}

document.getElementById('team-code').addEventListener('keyup', () => {
    if (document.getElementById('team-code').value.length == 6) {
        document.getElementById('get-teampasscode-btn').disabled = false;
    } else {
        document.getElementById('get-teampasscode-btn').disabled = true;
    }
});

document.getElementById('team-name').addEventListener('keyup', () => {
    if (document.getElementById('team-name').value.length > 0) {
        document.getElementById('get-teamname-btn').disabled = false;
    } else {
        document.getElementById('get-teamname-btn').disabled = true;
    }
});
