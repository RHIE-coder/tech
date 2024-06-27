

# submodule 추가

```sh
git submodule add https://github.com/rzmahmood/ethereum-pos-testnet ./externals/geth/research/ethereum-pos-testnet
```

# submodule 삭제

 - `git config --list`

```
submodule.ethereum-pos-testnet.url=https://github.com/rzmahmood/ethereum-pos-testnet
submodule.ethereum-pos-testnet.active=true
```

 - `.gitmodules`

```
[submodule "ethereum-pos-testnet"]
	path = ethereum-pos-testnet
	url = https://github.com/rzmahmood/ethereum-pos-testnet
```

1. `.gitmodules`에 있는 submodule 항목 삭제하기

```sh
git config -f .gitmodules --remove-section submodule.ethereum-pos-testnet
```

2. config에 submodule 항목 삭제하기 

```sh
git config -f .git/config --remove-section submodule.ethereum-pos-testnet
```

3. cache 삭제하기

```sh
git rm --cached ./ethereum-pos-testnet
```

4. submodule directory 삭제하기

```sh
rm -rf ./ethereum-pos-testnet
```