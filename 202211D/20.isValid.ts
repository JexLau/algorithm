function isValid(s: string): boolean {
  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(": stack.push(s[i]); break;
      case "[": stack.push(s[i]); break;
      case "{": stack.push(s[i]); break;
      case "}": {
        if (!stack.length || stack[stack.length - 1] !== "{") return false;
        stack.pop(); break;
      };
      case "]": {
        if (!stack.length || stack[stack.length - 1] !== "[") return false;
        stack.pop(); break;
      };
      case ")": {
        if (!stack.length || stack[stack.length - 1] !== "(") return false;
        stack.pop(); break;
      };
      default: return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}") === true)