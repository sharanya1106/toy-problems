from lrucache import lrucache

def main():
    test = lrucache(3)
    test.put(1, "Sharanya")
    test.put(2, "Tejaswini")
    test.put(3, "Akhila")
    assert test.cache_dict == {1: "Sharanya", 2: "Tejaswini", 3: "Akhila"}
    print("Put test case passed")
    print("-----------------------")
    assert test.get(2) == "Tejaswini"
    print("Get test case passed")
    print("-----------------------")
    assert test.cache_dict == {1: "Sharanya", 3: "Akhila", 2: "Tejaswini"}
    print("After Get, test case passed")
    print("-----------------------")
    test.put(4, "Manasa")
    # print(test.cache_dict)
    assert test.cache_dict == {3: "Akhila", 2: "Tejaswini", 4: "Manasa"}
    print("After put, test case passed")
    print("-----------------------")
if __name__ == "__main__":
    main()