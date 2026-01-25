import tkinter as tk
from tkinter import ttk
from tkinter import messagebox

class PxToVwConverter(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Px a VW Converter")
        self.geometry("280x250")
        self.configure(bg="#18181b")
        self.resizable(False, False)
        self.attributes('-topmost', True)
        self.create_widgets()

    def create_widgets(self):
        style = ttk.Style(self)
        style.theme_use('clam')
        style.configure('TLabel', background='#18181b', foreground='#fafafa', font=('Segoe UI', 12))
        style.configure('TButton', background='#2563eb', foreground='#fafafa', font=('Segoe UI', 12, 'bold'))
        style.configure('TEntry', fieldbackground='#27272a', foreground='#fafafa', font=('Segoe UI', 12))

        ttk.Label(self, text="Ancho del viewport (px):").pack(pady=(15, 2))
        self.viewport_var = tk.StringVar(value="1920")
        self.viewport_select = ttk.Combobox(self, textvariable=self.viewport_var, values=["1920", "2042"], state="readonly", width=18)
        self.viewport_select.pack(pady=2)

        ttk.Label(self, text="Valor en px:").pack(pady=(10, 2))
        self.px_entry = ttk.Entry(self, width=20)
        self.px_entry.pack(pady=2)


        self.result_label = ttk.Label(self, text="0vw", font=('Segoe UI', 14, 'bold'), cursor="hand2")
        self.result_label.pack(pady=(18, 2))
        self.result_label.bind("<Button-1>", lambda e: self.copy_to_clipboard(self.result_label))

        self.result_rem_label = ttk.Label(self, text="0rem", font=('Segoe UI', 14, 'bold'), cursor="hand2")
        self.result_rem_label.pack(pady=(2, 5))
        self.result_rem_label.bind("<Button-1>", lambda e: self.copy_to_clipboard(self.result_rem_label))

        # Actualizar automáticamente al cambiar el valor
        self.viewport_var.trace_add('write', lambda *args: self.convert_px_to_vw())
        self.px_entry.bind('<KeyRelease>', lambda event: self.convert_px_to_vw())

        # Eliminar el botón de convertir

    def convert_px_to_vw(self):
        try:
            px = float(self.px_entry.get())
            viewport = float(self.viewport_var.get())
            if viewport == 0:
                raise ValueError
            vw = (px / viewport) * 100
            rem = px / 16
            self.result_label.config(text=f"{vw:.2f}vw")
            self.result_rem_label.config(text=f"{rem:.2f}rem")
        except ValueError:
            self.result_label.config(text="0vw")
            self.result_rem_label.config(text="0rem")

    def copy_to_clipboard(self, label):
        value = label.cget("text")
        self.clipboard_clear()
        self.clipboard_append(value)
        label.config(foreground="#22d3ee")
        self.after(500, lambda: label.config(foreground="#fafafa"))

if __name__ == "__main__":
    app = PxToVwConverter()
    app.mainloop()
