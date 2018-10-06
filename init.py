# https://github.com/mkorkmaz/flightradar24
#http://www.lomasdeterciopelo.co.cr/apache2-default/joomla_esp/index.php/apoyo-educativo/python/107-tkintercanvas.html
from Tkinter import *


class App:
    def __init__(self, master=None):
        self.widget1 = Frame(master)
        self.widget1.pack()
        self.msg = Label(self.widget1, text="Primeiro widget")
        self.msg.pack()


def checkered(canvas, line_distance):
   # vertical lines at an interval of "line_distance" pixel
   for x in range(line_distance,canvas_width,line_distance):
      canvas.create_line(x, 0, x, canvas_height, fill="#476042")
   # horizontal lines at an interval of "line_distance" pixel
   for y in range(line_distance,canvas_height,line_distance):
      canvas.create_line(0, y, canvas_width, y, fill="#476042")


##CONFIG INICIAL
root = Tk()
root.title("Radar de avioes")
root.wm_iconbitmap("icon.ico")
root.geometry("800x600")


canvas_width = 700
canvas_height = 500 
w = Canvas(root, 
           width=canvas_width,
           height=canvas_height)
w.pack()

checkered(w,10)
#img = PhotoImage(file="/Users/jeanfernandes/Documents/git/temp/FlightRadar/plano.png")
#graphic = Label(root, Image=img)
#graphic.pack()

App(root)
root.mainloop()
