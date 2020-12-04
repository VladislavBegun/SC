using System;

namespace lists
{
    class Stack 
    {
        public int value;
        public Stack next;
    }
    class Queue
    {
        public int value;
        public Queue next, prev;
    }
    class Program
    {
        static Queue
            begin = null,
            end = null;
        static Stack
            top = null;
        static void ViewStack()
        {
            Stack pointer = top;
            while (pointer != null)
            {
                Console.WriteLine(pointer.value);
                pointer = pointer.next;
            }
        }
        static void Pop()
        {
            Stack tmp = top;
            int value = top.value;
            top = top.next;
        }
        static void PushInEnd(int value)
        {
            Queue help = new Queue();
            help.value = value;
            if (end == null)
            {
                help.next = help.prev = null;
                end = begin = help;
                return;
            }
            help.next = null;
            help.prev = end;
            end.next = help;
            end = help;
        }
        static void PushInBegin(int value)
        {
            Queue help = new Queue();
            help.value = value;
            if (begin == null)
            {
                help.next = help.prev = null;
                end = begin = help;
                return;
            }
            help.next = begin;
            help.prev = null;
            begin.prev = help;
            begin = help;
        }
        static void Push(int value)
        {
            Stack tmp = new Stack();
            tmp.value = value;
            tmp.next = top;
            top = tmp;
        }
        static void SortStack()
        {
            Stack pointer = null, t = null, help = null;
            if (top.next.next != null)
            {
                Push(0);
                do
                {
                    for (t = top; t.next.next != pointer; t = t.next)
                    {
                        if (t.next.value > t.next.next.value)
                        {
                            help = t.next.next;
                            t.next.next = help.next;
                            help.next = t.next;
                            t.next = help;
                        }
                    }
                    pointer = t.next;
                } while (top.next.next != pointer);
                Pop();
            }
        }
        static void Main(string[] args)
        {
            PushInEnd(1);
            PushInEnd(5);
            PushInEnd(13);
            PushInEnd(12);
            Console.WriteLine(end.value);
            Console.WriteLine(begin.value);
            PushInBegin(4);
            PushInBegin(6);
            PushInBegin(7);
            PushInBegin(8);
            Console.WriteLine(end.prev.value);
            Console.WriteLine(begin.value);

            Push(5);
            Push(6);
            Push(4);
            Push(2);
            Push(3);
            ViewStack();
            SortStack();
            ViewStack();
        }
    }
}
