```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop
    setCount(count + 1); 
  }, [count]);

  return <div>Count: {count}</div>;
}
```