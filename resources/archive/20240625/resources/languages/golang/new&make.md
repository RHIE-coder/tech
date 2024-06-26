# new & Make

Both of them are ways to allocate memory

# new()

 - new return pointer
 - way 

```golang
p := new(int) // memory address
```

# make()

only for creating channels, maps, and slices

```golang
m := make(map[int]string) // return map itself, not a pointer
```