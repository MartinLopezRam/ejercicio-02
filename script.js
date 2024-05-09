const height = 10;
let tree = '';
// Añade espacios en blanco para centrar el asterisco
tree += ' '.repeat(height - 1) + '*\n';
for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1);
    const zeros = '0'.repeat(i * 2 + 1);
    tree += spaces + zeros + '\n';
}
document.getElementById('tree').innerText = tree;