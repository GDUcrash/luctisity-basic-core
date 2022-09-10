export class Id {

    static generated = new Set();
    static alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    static new (length: number = 8) {

        let s: string;
        do {
            s = '';
            for (let i = 0; i < length; i++)
                s += this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
        }
        while (this.generated.has(s));
        
        return s;        

    }

}