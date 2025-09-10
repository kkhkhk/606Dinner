package com.team606.mrdinner.dto;

public class MemberDto {
    private String username;
    private String password;
    private String address;

    public MemberDto(String username, String password, String address) {
        this.username = username;
        this.password = password;
        this.address = address;
    }
}
