import {
  validate,
  validateOrReject,
  ValidationError,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

export class Post {
  @Length(10, 20)
  title: string;

  @Contains("hello")
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

let post = new Post();
post.title = "Hello";
post.text = "say sth";
post.rating = 11;
post.email = "hahahaha";
post.site = "https://google.com";

async function validateTest() {
  const err: Array<ValidationError> = await validate(post);

  if (err.length > 0) {
    console.log("validation failed. errors: ", err);
  } else {
    console.log("validation succeed");
  }
}

async function validateOrRejectTest() {
  try {
    await validateOrReject(post);
  } catch (err) {
    console.log("Promise rejected (validation fail). Errors:", err);
    if (err instanceof Array) {
      console.log(err.length);
    }
  }
}

(async () => {
  console.log("----- Post.ts -----");
  await validateTest();
  await validateOrRejectTest();
  console.log("-------------------");
})();
