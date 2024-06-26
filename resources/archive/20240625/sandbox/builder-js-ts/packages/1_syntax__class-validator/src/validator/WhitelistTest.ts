import { validate, Allow, Min } from "class-validator";

export class Post {
  @Allow()
  title: string;

  @Min(0)
  views: number;

  nonWhitelistedProperty: number;
}

let post = new Post();
post.title = "Hello world!";
post.views = 420;

post.nonWhitelistedProperty = 69;
(post as any).anotherNonWhitelistedProperty = "something";

validate(post).then((errors) => {
  console.log(errors);
});
