process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    process.stdout.write("choose between: lang, version, /exit \n")
    var input = process.stdin.read();
    if (!input) return;
	var instruction = input.toString().trim() ;
	switch (instruction) {
		case '/exit':
			process.stdout.write('Quitting app! \n');
			process.exit();
			break;
		case 'lang':
			process.stdout.write(process.env.LANG + '\n');
			break;
		case 'version':
			process.stdout.write(process.versions.node + '\n');
			break;
		default:
			process.stderr.write('Wrong instruction! \n');
			break;
	}
});
