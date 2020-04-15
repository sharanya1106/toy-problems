from collections import OrderedDict
class lrucache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache_dict = OrderedDict()