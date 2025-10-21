# 🧭 scroll-to-error

A lightweight utility that **automatically scrolls to the first form field that has a validation error** — built for React or any JavaScript application.

---

## 🚀 Features

- 🧩 **Zero dependencies** – Pure TypeScript/JavaScript utility  
- 🪄 **Smooth scrolling** to the first invalid input  
- 🎯 **Focuses** the error field automatically  
- 💡 Works with **React Hook Form**, **Formik**, or any validation logic  
- 🌍 Supports all browsers that implement `scrollIntoView`

---

## 📦 Installation

```npm install scroll-to-error```

or with Yarn:

```bash
yarn add scroll-to-error
```

## 🧠 Usage
Basic Example

```typescript

import { scrollToFirstError } from "scroll-to-error";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const errors = {
    email: "Email is required",
    password: "Password must be at least 8 characters",
  };

  // Scrolls smoothly to the first field that has an error
  scrollToFirstError(errors);
};

```


Expected HTML structure
Make sure your form fields have the name attribute corresponding to your error keys:

```html

<form>
  <input type="email" name="email" />
  <input type="password" name="password" />
</form>

```

So if your errors object has { email: "Required" },
it will scroll to 
```html
<input name="email" />.
```


### ⚙️ Function Signature

function ```scrollToFirstError(errors?: Record<string, any>): void;```
Parameters
Name	Type	Description
errors	Record<string, any>	An object containing validation errors. Keys must match input name attributes.

### ✨ Example with React Hook Form
```tsx
import { useForm } from "react-hook-form";
import { scrollToFirstError } from "scroll-to-error";

export default function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => scrollToFirstError(errors))}
    >
      <input {...register("email", { required: "Email is required" })} />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password", { required: "Password is required" })} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```
### 🧰 TypeScript Support
Fully written in TypeScript.
Type definitions (index.d.ts) are automatically included in the package.

### 🪶 Example Output
When your form validation fails:

The page smoothly scrolls to the first invalid field.

The input gains focus, helping users correct errors quickly.

### 🧑‍💻 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a PR or issue on the GitHub repository.

### 📝 License
This project is licensed under the MIT License – see the LICENSE file for details.

### 💖 Support
If you like this package, please ⭐ star the repo on GitHub!

Made with ❤️ by Rishabh Kadam








