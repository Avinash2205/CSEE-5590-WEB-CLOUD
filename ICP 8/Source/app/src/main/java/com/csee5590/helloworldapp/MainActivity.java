package com.csee5590.helloworldapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.Button;
import android.view.View.OnClickListener;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
EditText uname,pwd;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button b1 = (Button) findViewById(R.id.button2);
         uname = (EditText) findViewById(R.id.editText);
         pwd = (EditText) findViewById(R.id.editText2);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (uname.getText().toString().equals("admin") && pwd.getText().toString().equals("password")) {
                    Intent login = new Intent(MainActivity.this, Home.class);
                    MainActivity.this.startActivity(login);
                } else
                    Toast.makeText(getApplicationContext(), "Wrong Credentials", Toast.LENGTH_SHORT).show();

            }

        });

    }
}