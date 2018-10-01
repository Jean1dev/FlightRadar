# https://github.com/mkorkmaz/flightradar24
#http://www.lomasdeterciopelo.co.cr/apache2-default/joomla_esp/index.php/apoyo-educativo/python/107-tkintercanvas.html
from Tkinter import *


class App:
    def __init__(self, master=None):
        self.widget1 = Frame(master)
        self.widget1.pack()
        self.msg = Label(self.widget1, text="Primeiro widget")
        self.msg.pack()


##CONFIG INICIAL
root = Tk()
root.title("Radar de avioes")
root.wm_iconbitmap("icon.ico")
root.geometry("1260x780")

img = PhotoImage(file="/Users/jeanfernandes/Documents/git/temp/FlightRadar/plano.png")
graphic = Label(root, Image=img)
graphic.pack()

App(root)
root.mainloop()
