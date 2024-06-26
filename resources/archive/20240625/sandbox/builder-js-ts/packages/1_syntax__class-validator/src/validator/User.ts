import {
  Allow,
  Contains,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  validate,
  ValidateIf,
  ValidationError,
} from "class-validator";

class BaseContent {
  @IsEmail()
  email: string;

  @IsString()
  password: any;
}

export class User extends BaseContent {
  otherProp: string;

  @ValidateIf((o) => o.otherProp === "value")
  @IsNotEmpty()
  example: string;

  @MinLength(10)
  @MaxLength(20)
  name: string;

  @Contains("hello", {
    context: {
      msg: "hello",
    },
  })
  welcome: string;

  @MinLength(2)
  password: any;

  @Allow()
  aaa: string;
}

let user = new User();

user.email = "test@test.com";
user.password = "123"; // ERROR: not string
user.name = "1234567890";
user.welcome = "ello";
(user as any).anotherNonWhitelistedProperty = "hhh";

validate(user, { whitelist: true }).then((errors: ValidationError[]) => {
  let ctx;
  if (errors.length > 0) {
    ctx = errors[0].contexts;
    if (ctx?.contains !== undefined) {
      console.log(ctx["contains"]);
    }
  }
});
