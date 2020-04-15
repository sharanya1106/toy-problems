from lrucache import lrucache

def main():
    test = lrucache(3)
    test.put(1, "Sharanya")
    test.put(2, "Tejaswini")
    test.put(3, "Akhila")
    assert test.cache_dict == {1: "Sharanya", 2: "Tejaswini", 3: "Akhila"}
    print("Put test case passed")
    print()
    assert test.get(2) == "Tejaswini"
    print("Get test case passed")
    print()

if __name__ == "__main__":
    main()