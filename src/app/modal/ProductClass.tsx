export default class Product {
  private id: number;
  private image: string;
  private name: string;
  private desc: string;
  private price: number;
  private site: string;
  github: string;

  constructor(
    id: number,
    image: string,
    name: string,
    desc: string,
    price: number,
    site: string,
    github: string
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.site = site;
    this.github = github;
  }

  // Getters and setters

  getId(): number {
    return this.id;
  }

  getGithub(): string {
    return this.github;
  }

  getImage(): string {
    return this.image;
  }

  getSite(): string {
    return this.site;
  }

  getName(): string {
    return this.name;
  }

  getDesc(): string {
    return this.desc;
  }

  getPrice(): string {
    return `£${this.price}`;
  }

  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDesc(desc: string): void {
    this.desc = desc;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}
