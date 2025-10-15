export default class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if ([p, g].some(num => num < 1 || !this.isPrime(num))) {
      throw Error();
    }

    this.p = p;
    this.g = g;
  }

  private isPrime(num: number): boolean {
    const range = Array.from({ length: num - 2 }, (_, i) => i + 2);

    return range.every(i => num % i !== 0);
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    if (privateKey >= this.p || privateKey <= 1) {
      throw Error();
    }

    return (this.g ** privateKey) % this.p;
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return publicKey ** privateKey % this.p;
  }
}