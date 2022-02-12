document.getElementById('get-teampasscode-btn').onclick = () => {
    document.getElementById('modal-body-join').innerHTML = `You are about to <strong>leave</strong> your team and join team with passcode <strong>${document.getElementById('team-code').value}</strong>. Are you sure?`;
}

document.getElementById('team-code').addEventListener('keyup', () => {
    if (document.getElementById('team-code').value.length == 6) {
        document.getElementById('get-teampasscode-btn').disabled = false;
    } else {
        document.getElementById('get-teampasscode-btn').disabled = true;
    }
});
